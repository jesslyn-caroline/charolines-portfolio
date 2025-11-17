import Carousel, { type ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel_({children, num} : {children: React.ReactNode, num: number}) {
    const responsive:ResponsiveType = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: num },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: num },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: num },
        mobile: { breakpoint: { max: 640, min: 0 }, items: num }
    }

    return (
    <div className="relative pb-12">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="mx-0"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="mt-6 flex justify-center gap-2"
          renderDotsOutside={true}
          renderButtonGroupOutside={true}
          itemClass="w-full"
          focusOnSelect={true}
        >
          {children}
        </Carousel>
    </div>
    );
}

export default Carousel_