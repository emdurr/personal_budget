# == Schema Information
#
# Table name: incomes
#
#  id         :integer          not null, primary key
#  name       :string
#  amount     :string
#  date       :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Income < ApplicationRecord
end
