import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

function HomePage(props){
    return(
    <>
    <Head>
        <title>Next Meetups</title>
        <meta name="description" content="app to learn next basics"></meta>
    </Head>
    <MeetupList meetups={props.meetups}></MeetupList>
    </> )
}

export async function getStaticProps(){
    const client = await MongoClient.connect(
        "mongodb+srv://AmanRajVerma:amanrajverma@cluster0.5uhe1jy.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetup");
      const meetups = await meetupsCollection.find().toArray();
      client.close();
    return{
        props:{
            meetups: meetups.map((meetup)=>({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate:1
    }
}

export default HomePage;