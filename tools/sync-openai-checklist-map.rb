#!/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "time"

ROOT = File.expand_path("..", __dir__)
OPENAI_PATH = File.join(ROOT, "agents/openai.yaml")

openai = YAML.load_file(OPENAI_PATH)
system = openai.dig("interface", "checklist_system")
abort("Missing interface.checklist_system in #{OPENAI_PATH}") unless system

checklist_rel = system.fetch("primaryGenerationChecklist")
checklist_path = File.join(ROOT, checklist_rel)
checklist = YAML.load_file(checklist_path)

mappings = system.fetch("promptToChecklistMappings")
rules = checklist.fetch("rules").map { |rule| rule.fetch("id") }
unknown = mappings.flat_map { |m| m.fetch("checklistRuleIds") }.uniq - rules
abort("Unknown checklist rule ids: #{unknown.join(', ')}") unless unknown.empty?

checklist["sourceAgentPrompt"] = {
  "path" => "agents/openai.yaml",
  "fields" => [
    "interface.default_prompt",
    "interface.component_first_figma_generation_prompt"
  ]
}
checklist["sync"] = {
  "source" => "agents/openai.yaml#interface.checklist_system.promptToChecklistMappings",
  "tool" => "tools/sync-openai-checklist-map.rb",
  "generatedField" => "sourcePromptMappings",
  "policy" => system.fetch("syncPolicy")
}
checklist["sourcePromptMappings"] = mappings.map do |mapping|
  {
    "promptSection" => mapping.fetch("promptSection"),
    "checklistRuleIds" => mapping.fetch("checklistRuleIds")
  }
end
checklist["lastSyncedAt"] = Time.now.iso8601

File.write(checklist_path, "#{checklist.to_yaml.sub(/^---\n/, '')}")
puts "Synced #{mappings.length} prompt mappings to #{checklist_rel}"
