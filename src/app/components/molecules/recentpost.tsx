import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPost(){
    return(
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post
                title="Nama"
                body="Andi Fadhil Akbar Syahbana"
            />
            <Post 
                title="NIM"
                body="2341728027"
            />

        </Section2>
    )
}