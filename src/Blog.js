import BlogCard from "./BlogCard";
import Hero from "./Hero"
import image_1 from './Images/image_1.jpg';
import image_2 from './Images/image_2.jpg';
import image_3 from './Images/image_3.jpg';
import image_4 from './Images/image_4.jpg';
import image_5 from './Images/image_5.jpg';
import image_6 from './Images/image_6.jpg';

const Blog = () =>{

    const blogHero =[
        {
            p1: "Home",
            p2: "Blog",
            p3: "Our Blog"
        }
    ]


    const blogInfo = [
        {
            img:image_1,
            title:"Why Lead Generation is Key for Business Growth",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn: "Continue"
        },
        {
            img:image_2,
            title:"Why Lead Generation is Key for Business Growth",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn: "Continue"
        },
        {
            img:image_3,
            title:"Why Lead Generation is Key for Business Growth",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn: "Continue"
        },
        {
            img:image_4,
            title:"Why Lead Generation is Key for Business Growth",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn: "Continue"
        },
        {
            img:image_5,
            title:"Why Lead Generation is Key for Business Growth",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn: "Continue"
        },
        {
            img:image_6,
            title:"Why Lead Generation is Key for Business Growth",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn: "Continue"
        }
    ]
    

    return(
        <>  
            <Hero info={blogHero[0]}/>
            <div className="container-fluid py-5 p-md-5">
                <div className="row p-xl-5">
                    <div className="col-12 px-xl-5">
                        <div className="row px-xl-5 g-3">
                            <div className="col-12">
                                <BlogCard img={blogInfo[0].img} info1={blogInfo[0].title} info2={blogInfo[0].desc} info3={blogInfo[0].btn} />
                            </div>
                            <div className="col-12">
                                <BlogCard img={blogInfo[1].img} info1={blogInfo[1].title} info2={blogInfo[1].desc} info3={blogInfo[1].btn} />
                            </div>
                            <div className="col-12">
                                <BlogCard img={blogInfo[2].img} info1={blogInfo[2].title} info2={blogInfo[2].desc} info3={blogInfo[2].btn} />
                            </div>
                            <div className="col-12">
                                <BlogCard img={blogInfo[3].img} info1={blogInfo[3].title} info2={blogInfo[3].desc} info3={blogInfo[3].btn} />
                            </div>
                            <div className="col-12">
                                <BlogCard img={blogInfo[4].img} info1={blogInfo[4].title} info2={blogInfo[4].desc} info3={blogInfo[4].btn} />
                            </div>
                            <div className="col-12">
                                <BlogCard img={blogInfo[5].img} info1={blogInfo[5].title} info2={blogInfo[5].desc} info3={blogInfo[5].btn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>  
    );
}
export default Blog;