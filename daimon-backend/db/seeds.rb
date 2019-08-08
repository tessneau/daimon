# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
UserHabit.destroy_all
HabitCategory.destroy_all
Pin.destroy_all
Comment.destroy_all
Branch.destroy_all
Post.destroy_all
User.destroy_all
Habit.destroy_all
Category.destroy_all

#################### users ####################
40.times do
  User.create(username: Faker::TvShows::TwinPeaks.character.split(' ').join(''), password_digest: "123", avatar_img: Faker::Fillmurray.image(width: 200, height: 200) )
end

#################### habits ####################

walk_dog = Habit.create(name: "Walk the dog", positive: true, maxFrequency: "3", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
wake_up = Habit.create(name: "Wake up by 6", positive: true, maxFrequency: "1", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
guitar = Habit.create(name: "Play guitar for 20 min", positive: true, maxFrequency: "1", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
arabic = Habit.create(name: "Practice arabic for 15 min", positive: true, maxFrequency: "1", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
drink_water = Habit.create(name: "Drink water", positive: true, maxFrequency: "5", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
read = Habit.create(name: "Read 10 pages", positive: true, maxFrequency: "10", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
reach_out = Habit.create(name: "Reach out to a loved one", positive: true, maxFrequency: "1", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
breakfast = Habit.create(name: "Breakfast", positive: true, maxFrequency: "1", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
smoke = Habit.create(name: "Don't smoke", positive: false, maxFrequency: "0", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))
dont_drink = Habit.create(name: "Don't drink", positive: false, maxFrequency: "0", firstDay: Faker::Time.backward(days: 5, period: :all, format: :default))

#################### user habits ####################

  User.all.each do |user|
    3.times do
      UserHabit.create(user: user, habit: Habit.all.sample)
    end
  end

#################### categories ####################

wellness = Category.create(name: "Wellness", description: "the state of being in good health physically and mentally, especially as an actively pursued goal")
academia = Category.create(name: "Academia", description: "the environment or community concerned with the pursuit of research, education, and scholarship")
fitness = Category.create(name: "Fitness", description: "physical wellness")
healthy_eating = Category.create(name: "Healthy Eating", description: "treating your body right")
mind = Category.create(name: "Mind", description: "anything that clears your head, helps you center, and achieve mental happiness")
spiritual = Category.create(name: "Spiritual", description: "practices of meditation, emotional awareness, perspective")
relationships = Category.create(name: "Relationships", description: "anything related to treating those around you positively")
productivity = Category.create(name: "Productivity", description: "goals, integrity, turning responsibilty into ease, endurance, staying motivated")
career = Category.create(name: "Career", description: "practicing networking, interview skills, brainstorming ideas, getting efficient in your work")
learning_skills = Category.create(name: "Learning Skills", description: "anything to do with learning a new skill, i.e: new language, new cooking recipe, new course, new instrument, new blog, learning CPR, etc..")
self_confidence = Category.create(name: "Self Confidence", description: "self-compassion, self-love, self-awareness, imposter syndrome and how to conquer it, confindent body language and speaking for yourself, forgiving yourself")
responsibility = Category.create(name: "Responsibilty", description: "Whatever responsibility weighs you, whether it's from a choice or not")
addiction = Category.create(name: "Addiction", description: "Breaking a cycle")

#################### habit categories ####################

HabitCategory.create(habit: walk_dog, category: responsibility)
HabitCategory.create(habit: walk_dog, category: relationships)
HabitCategory.create(habit: wake_up, category: self_confidence)
HabitCategory.create(habit: wake_up, category: productivity)
HabitCategory.create(habit: wake_up, category: career)
HabitCategory.create(habit: guitar, category: learning_skills)
HabitCategory.create(habit: guitar, category: mind)
HabitCategory.create(habit: guitar, category: self_confidence)
HabitCategory.create(habit: arabic, category: learning_skills)
HabitCategory.create(habit: drink_water, category: wellness)
HabitCategory.create(habit: drink_water, category: healthy_eating)
HabitCategory.create(habit: drink_water, category: productivity)
HabitCategory.create(habit: drink_water, category: fitness)
HabitCategory.create(habit: read, category: wellness)
HabitCategory.create(habit: read, category: learning_skills)
HabitCategory.create(habit: read, category: career)
HabitCategory.create(habit: read, category: self_confidence)
HabitCategory.create(habit: read, category: mind)
HabitCategory.create(habit: reach_out, category: mind)
HabitCategory.create(habit: reach_out, category: wellness)
HabitCategory.create(habit: reach_out, category: relationships)
HabitCategory.create(habit: breakfast, category: healthy_eating)
HabitCategory.create(habit: breakfast, category: productivity)
HabitCategory.create(habit: smoke, category: fitness)
HabitCategory.create(habit: smoke, category: career)
HabitCategory.create(habit: smoke, category: relationships)
HabitCategory.create(habit: smoke, category: self_confidence)
HabitCategory.create(habit: smoke, category: wellness)
HabitCategory.create(habit: smoke, category: addiction)
HabitCategory.create(habit: dont_drink, category: wellness)
HabitCategory.create(habit: dont_drink, category: relationships)
HabitCategory.create(habit: dont_drink, category: career)
HabitCategory.create(habit: dont_drink, category: fitness)
HabitCategory.create(habit: dont_drink, category: self_confidence)
HabitCategory.create(habit: dont_drink, category: addiction)

#################### Posts ##################################
100.times do
  Post.create(title: Faker::TvShows::TwinPeaks.quote, content: Faker::Lorem.paragraph, category: Category.all.sample, author: User.all.sample)

  Comment.create(content: Faker::GreekPhilosophers.quote, post: Post.all.sample, user: User.all.sample)

  Branch.create(user: User.all.sample, post: Post.all.sample)
end

40.times do
  Pin.create(user: User.all.sample, post: Post.all.sample)
end

puts 'YOU GOT ITTTTTTT   🔥🌋'
