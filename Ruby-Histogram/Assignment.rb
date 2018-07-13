class MyString

  attr_accessor :str
  attr_reader :letters

  def initialize
    @str = 'Hello, World!'

  end

     def frequency
       @letters = @str.each_char.with_object(Hash.new(0)) { |hsh, key| hsh[key] += 1; hsh}
     end

        def histogram
          frequency()
          ("a".."z").each do |letter|
            i=0
            lineDown=""
            while i<@letters[letter]
              lineDown="#{lineDown}*"
              i = i + 1
            end
            puts "#{letter}: #{lineDown}"
        end
end
  mstr = MyString.new("Look out");
  mstr.histogram()
