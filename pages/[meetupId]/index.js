import MeetupDetail from "../../components/meetups/MeetupDetail";

const Detail = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meeting"
      address="Park Street,Munich"
      description="this is a test."
    ></MeetupDetail>
  );
};

export async function getStaticPaths(){
  return{
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1'
        },
      },
      {
        params:{
          meetupId:'m2'
        },
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        title: "A First Meeting",
        id:meetupId,
        address: "Park Street,Munich",
        description: "this is a test.",
      },
    },
  };
}
export default Detail;
