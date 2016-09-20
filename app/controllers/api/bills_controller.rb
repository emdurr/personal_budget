class Api::BillsController < ApplicationController

	def index
		render json: Bill.all
	end

	def show
		@bill = Bill.find(params[:id])
		render json: @bill
	end

	def create
		bill = Bill.new(bill_params)
		if bill.save
			render json: bill
		else
			render json: { errors: bill_errors }, status: 401
		end
	end

	def update
		@bill = Bill.new(params[:id])
		if @bill.update(bill_params)
			render json: @bill
		else
			render json: { errors: @bill_errors }, status: 401
		end
	end

	def destroy
		@bill = Bill.new(params[:id])
		@bill.destroy
		render json: { message: "Deleted!" }
	end

	private
		def bill_params
			params.require(:bill).permit(:name, :due_date, :due_range, :category, :amount)
		end
end
