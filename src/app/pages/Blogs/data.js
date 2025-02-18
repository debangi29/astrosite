import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";
import { Client, Storage } from "appwrite";
import { firebaseConfig, appwrite_pid } from "@/app/config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let blog_data = []
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(appwrite_pid);
const storage = new Storage(client);
function jsonData(data, count) {
    const header_img_url = storage.getFilePreview('677777dc00318c84924c', `blog-${count}`);
    const headerImg = header_img_url;
    const defwriter = storage.getFilePreview('677777dc00318c84924c', `blog-${count}-writer`);
    const title = data.title;
    const author = data.author;
    const slug = data.slug;
    const description = data.description;
    const date = data.date;
    const category = data.category;
    const heading = data.heading;
    const text = data.content;
    const blog_obj = {
        "title": title,
        "author": author,
        "slug": slug,
        "description": description,
        "date": date,
        "category": category,
        "image": headerImg,
        "writer": defwriter,
        "heading": heading,
        "text": text
    };
    blog_data.push(blog_obj);

}
async function loadBlogs() {
    let counter = 1;
    const sn = await getDocs(collection(db, "blogs"));
    sn.forEach((doc) => {
        jsonData(doc.data(), counter);
        counter++;
    });
}

loadBlogs();

/*const blog_data = [
    {
        "title": "Why is the speed of light a finite constant?",
        "author": "Govindswaroop Rahangdale",
        "slug": "speed-of-light",
        "description": "Why does information travel with a finite and constant speed? In simple words, why is it that always the cause of an event precedes the effect of the event?",
        "date": "2020-09-03",
        "category": "Speed of Light, Theory of Special Relativity",
        "image": "https://assets-global.website-files.com/60fe7abd89d2398fce34e908/6115fa61dd2d3579dbf07075_SupportingImage2-space-ggc-blogpost-630pxwide.jpeg",
        "writer": "../../images/writers/GovindswaroopRahangdale.jpg",
        "heading": "Why does information travel with a finite and constant speed? In simple words, why is it that always the cause of an event precedes the effect of the event?",
        "text": "As Einstein did it, let's conduct a thought experiment. Suppose I have two balls, both contain the information regarding an event. Ball 1 carries the information regarding the cause of an event, and Ball 2 carries the information regarding the effect of the event. I throw Ball 1 at you, standing some distance away from me, with a specific but very slow speed. A moment later, I throw Ball 2 at you with a much much higher speed. What happens? You receive Ball 2 earlier than Ball 1. This means you received the information regarding the effect of the event earlier than the information regarding the cause of the event. In physical reality, this result signifies that a dog died without being born, or a bullet hits a bird without being fired, and so on, which is absurd. Thus, from this thought experiment, we infer that any information should travel at a constant and finite speed, i.e., the light should travel at a constant speed too. James Clerk Maxwell, in 1861-62, introduced the famous Maxwell's equations using which, in 1864, he calculated the speed of light in a vacuum, as the ratio of magnetic field component amplitude and electric field component amplitude, to be given by:\n\n_c = 1 / (ε0μ0)^ 1/2_\n\nWhere ε0 is the permittivity of vacuum, and μ0 is the permeability of free space. Afterward, when the speed of light was calculated to be c = 2.998 x 10^8 m/s, it was too close to the value calculated by Maxwell in 1864. The speed of information travel being constant is a very general result in Einstein's theory of Special Relativity."
    },
    {
        "title": "Stability of the Sun",
        "author": "Govindswaroop Rahangdale",
        "slug": "stability-of-the-sun",
        "description": "Why doesn't the Sun blow up like a Hydrogen bomb (since it works on the same principle of thermonuclear reactions)? Why does the Sun ‘burn' stably for billions of years?",
        "date": "2020-09-13",
        "category": "Sun, Core, Thermonuclear Energy",
        "image": "https://assets-global.website-files.com/60fe7abd89d2398fce34e908/6115fa61dd2d3579dbf07075_SupportingImage2-space-ggc-blogpost-630pxwide.jpeg",
        "writer": "../../images/writers/GovindswaroopRahangdale.jpg",
        "heading": "Why doesn't the Sun blow up like a Hydrogen bomb (since it works on the same principle of thermonuclear reactions)? Why does the Sun ‘burn' stably for billions of years?",
        "text": "Mostly comprising of Hydrogen, the Sun generates power by thermonuclear reactions, or rather, “controlled thermonuclear reactions”. Let's see how these thermonuclear reactions are controlled.\n\nThe core continuously generates energy in the core, which travels through the outer layers to release the observed luminosity. Imagine a slight perturbation in the Sun, which causes it to produce energy in the core by thermonuclear reactions faster than this energy leaving the surface as the luminosity of the Sun. This extra net energy input would cause the Sun to expand slightly (just opposite to Kelvin-Helmholtz contraction mechanism where a net loss would cause the Sun to expand slightly). The expansion would tend to lower the temperature in the core. Therefore, the rate of energy generation by the thermonuclear reactions would reduce, thereby curing the original overproduction of nuclear energy.\n\n![Expansion and Contraction](./images/energy)\n_The overproduction of energy causes expansion of outer layers while underproduction of energy causes them to contract._\n\nConversely, imagine the initial perturbation caused the Sun to produce energy in the core by thermonuclear reactions slower than this energy leaving the surface as the luminosity of the Sun. This underproduction of energy would cause the Sun to contract slightly (same mechanism as above). This contraction would let the temperature in the core to increase. Therefore, the power generation rate would rise, thereby compensating the underproduction and again curing the problem.\n\nWe can say the Sun would follow a cycle of overproduction and underproduction of energy to compensate any perturbation without changing the overall luminosity L.\n\nThis is the Sun's built-in “safety valve” to avoid the rapid expansion of gases which characterizes a bomb explosion."
    },
    {
        "title": "The Convective Zone in Stars",
        "author": "Govindswaroop Rahangdale",
        "slug": "convective-zone-in-stars",
        "description": "Let us see why a convection zone is present in stars and how convection works in low mass stars, such as in the Sun.",
        "date": "2020-09-21",
        "category": "Stars, Sun, Convection",
        "image": "https://assets-global.website-files.com/60fe7abd89d2398fce34e908/6115fa61dd2d3579dbf07075_SupportingImage2-space-ggc-blogpost-630pxwide.jpeg",
        "writer": "../../images/writers/GovindswaroopRahangdale.jpg",
        "heading": "A star emits energy using radiation transfer, and there is a convection zone in the star's sub-photospheric layers. Let us see why a convection zone is present and how convection works in low mass stars, such as in the Sun.", 
        "text": "Thus the photons are termed as 'walking' in this convection zone and then 'flying' as they exit the convection zone. The surface from where the photons start 'flying' is termed as the photosphere."

    },
    
    
]
*/
export default blog_data