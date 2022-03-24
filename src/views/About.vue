<template>
  
   <div class="about-section">
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
               Name: Mr.Piriyaphong Wiripanya <br>
                Nickname: Tee <br> 
                ID: 6204101337 <br>
                Major : Computer Science <br> Faculty of Science Maejo Uiversity 
            </p>
            <div class="skills">
                <span>Book</span>
                <span>Game &amp; Movie</span>
                <span>Coding</span>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: "About",
};
</script>

<style>


.about-section{
    background: url("../assets/_MG_6466.JPG") no-repeat left;
    background-size: 55%;
    background-color: #fdfdfd;
    overflow: hidden;
    padding: 100px 0;
}

.inner-container{
    width: 55%;
    float: right;
    background-color: #fdfdfd;
    padding: 150px;
}

.inner-container h1{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
}

.text{
    font-size: 13px;
    color: #545454;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}

.skills{
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 13px;
}

@media screen and (max-width:1200px){
    .inner-container{
        padding: 80px;
    }
}

@media screen and (max-width:1000px){
    .about-section{
        background-size: 100%;
        padding: 100px 40px;
    }
    .inner-container{
        width: 100%;
    }
}

@media screen and (max-width:600px){
    .about-section{
        padding: 0;
    }
    .inner-container{
        padding: 60px;
    }
}
</style>