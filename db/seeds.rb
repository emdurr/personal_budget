30.times do
	Bill.create(name: Faker::Lorem.word, amount: Faker::Number.decimal(3, 2), due_date: Faker::Date.forward(30), due_range: ['1st-15th', '15th-30th'].sample, category: Faker::Hipster.word)
end
puts "Bills Seeded"