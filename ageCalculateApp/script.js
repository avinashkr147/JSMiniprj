 let inputDate = document.getElementById("inputDate");
 let result = document.getElementById("result");
 let emptyInputAlert = document.getElementById("emptyInputAlert");
inputDate.max =  new Date().toISOString().split("T")[0];

        function calculateAge(){
                let birthDate = new Date(inputDate.value)
                let d1 =   birthDate.getDate();
                let m1 =   birthDate.getMonth() + 1  ;
                let y1 =   birthDate.getFullYear();

                let todayDate  = new Date();
                  let d2 =   todayDate.getDate();
                let m2 =   todayDate.getMonth() + 1;
                let y2 =   todayDate.getFullYear();
                
                //console.log(birthDate);
            //    console.log(todayDate);

            let d3,m3,y3;

            y3 = y2 -y1 ;
            if (inputDate.value === "") {
                alert("Enter birthDate First");
                emptyInputAlert.textContent = "Enter the BirthDate first..."

                
            }
            else{
                
                if (m2 >= m1) {
                    m3 = m2 - m1;
                } else {
                    y3--;
                    m3 = 12 + m2 - m1;
                }
                if (d2 >= d1) {
                     d3 = d2 - d1
                } else {
                   m3--;
                   d3 = getDaysInMonth(y1, m1) + d2 - d1;
                }
               if(m3 < 0){
                    m3 = 11; 
                    y3--;
               }    
             result.innerHTML = `You are a ${y3} Years, ${m3} Months, ${d3} Days old..`
               
        }
        function getDaysInMonth(year,month){
                return new  Date(year,month ,0).getDate();  
        }
            }


        