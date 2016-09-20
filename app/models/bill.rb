# == Schema Information
#
# Table name: bills
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  category   :string
#  due_date   :date
#  due_range  :string
#  amount     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bill < ApplicationRecord
	validates_presence_of :name, :amount
end
