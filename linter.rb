directories = ARGV
directories.each do |directory|
  search_term = directory + "/**/*.js"
  Dir.glob(search_term) do |doc|
    this_file = File.open(doc, "r")
    text = File.read(this_file)
    if text[0..24] == "/* jshint esversion: 6 */"
    else
      new_text = "/* jshint esversion: 6 */\n" + text
      File.open(doc, "w") { |file| file.write new_text }
    end
  end
end
