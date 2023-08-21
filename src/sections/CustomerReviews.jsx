import { reviews } from "../assets/constants"
import ReviewCard from "../components/ReviewCard"


const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h3 className="font-palanquin text-center font-bold text-4xl">
          What Our
          <span className="text-coral-red"> Customers</span> Say?
        </h3>

        <p className="m-auto text-center mt-4 info-text max-w-lg">Hear genuine stories of our satisfied customers about their exeptional experiences with us</p>
        {/* mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 */}
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            {reviews.map((review) =>(
              < ReviewCard 
                key={review.customerName}
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            ))}
        </div>
    </section>
  )
}

export default CustomerReviews
