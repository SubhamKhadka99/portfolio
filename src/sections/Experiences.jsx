import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => 
      <section id ="work">
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  
</section>

export default Experiences;