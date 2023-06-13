
import React from "react";
import { useContext } from "react";
import SocialContext from "../../SocialContext";
const User = () => {

  const {darkMode, setDarkMode} = useContext(SocialContext)
  const styles = {

    header: {
        paddingTop: "10%",
        fontSize: "400%",
        color: "rgb(150,145,145)",


    },

    button: {
        width: "70%",
        height: "30%"  
    },

    field: {
        fontSize:"200%",
        color: "rgb(150,145,145)",
        borderColor: "rgb(150,145,145)",
        borderWidth: "thick",
        textAlign: "center",
        borderStyle: "solid",
        borderRadius: "12px"

    },

    signOutButton: {
        fontSize: "230%",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#11bf1d",
        borderRadius: "12px",
        paddingTop:"2%",
        paddingBottom:"2%",
        paddingRight:"4%",
        paddingLeft:"4%",
        // width:"25%",
        marginTop:"6%"
        
        
      },

      buttonPad: {
        paddingTop: "8.5%"
      },


    lightButton: {
      fontSize: "130%",
      fontWeight: "bold",
      color: "black",
      backgroundColor: "white",
      borderRadius: "12px",
      paddingTop:"2%",
      paddingBottom:"2%",
      paddingRight:"4%",
      paddingLeft:"4%",
      marginLeft:".5%",
      
      
      
    },

    buttonPad: {
      paddingTop: "8.5%"
    },


    darkButton: {
      fontSize: "130%",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "black",
      borderRadius: "12px",
      paddingTop:"2%",
      paddingBottom:"2%",
      paddingRight:"4%",
      paddingLeft:"4%",
      marginLeft:"1%",
      marginTop:"4%"
      
      
    },

    buttonPad: {
      paddingTop: "8.5%"
    },


    contrastButton: {
      fontSize: "130%",
      fontWeight: "bold",
      color: "black",
      backgroundColor: "#FF00FF",
      borderRadius: "12px",
      paddingTop:"2%",
      paddingBottom:"2%",
      paddingRight:"4%",
      paddingLeft:"4%",
      marginLeft:"1%",
      marginTop:"4%",
      
      
      
    },

    buttonPad: {
      paddingTop: "8.5%"
    },

    userProfile: {
      
      textAlign:"center",
      marginTop:"9%"

    },

    viewMode: {
      display: "flex",
      // flexDirection:"row",
      justifyContent:"center",
      
      flexDirection:"column",
      width: "28%",
      alignContent:"center",
      marginLeft:"37%"

       
    },

    

    pTag: {
      fontWeight:"bold",
      marginTop:"3%"
    },

    emailRow: {
      display: "flex",
      flexDirection:"row",
      justifyContent:"center"
    },

    emailAdd: {
        // paddingLeft:".25%",
        // paddingTop:".25%",
        fontSize:"110%"
    },

    backgroundColor: darkMode ? "black" : "a2d8fe",
        textColor: darkMode ? "white" : "black"

}


  return (
    <div className='userProfile'style={styles.userProfile}>
      <h1>Profile</h1>
      <img src="" alt="" className="profileImg" />
      <span className="profileName"> Bartholomew D. Lester</span>

      
      <div>
      <h2 style={styles.pTag}>Email:</h2>
        <p style={styles.emailAdd}>blester@gmail.com</p>
      </div>
      <div>
        <h2 style={styles.pTag}>View Mode:</h2>
        </div>
      <div style={styles.viewMode}>
       
        
        <button style={styles.lightButton}>Light</button>
        <button style={styles.darkButton}>Dark</button>
        
      </div>

      <button style={styles.signOutButton} >Sign Out</button>

    </div>
  )
}

export default User
