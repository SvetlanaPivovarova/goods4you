import member1 from "../assets/team-member-1.png"
import member2 from "../assets/team-member-2.png"
import member3 from "../assets/team-member-3.png"
import member4 from "../assets/team-member-4.png"
import member5 from "../assets/team-member-5.png"
import member6 from "../assets/team-member-6.png"

function Team() {
    return (
        <section className="team-block block block_type_dark">
            <span className="bg"></span>
            <div className="container">
                <h2 className="block__title">
                    Our team
                </h2>
                <div className="container">
                    <ul className="image-gallery">
                        <li className="image-gallery__column">
                            <ul>
                                <li>
                                    <img src={member1} className="image-gallery__image" />
                                </li>
                                <li>
                                    <img src={member2} className="image-gallery__image" />
                                </li>
                            </ul>
                        </li>
                        <li className="image-gallery__column">
                            <ul>
                                <li>
                                    <img src={member3} className="image-gallery__image" />
                                </li>
                                <li>
                                    <img src={member4} className="image-gallery__image" />
                                </li>
                            </ul>
                        </li>
                        <li className="image-gallery__column">
                            <ul>
                                <li>
                                    <img src={member5} className="image-gallery__image" />
                                </li>
                                <li>
                                    <img src={member6} className="image-gallery__image" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Team