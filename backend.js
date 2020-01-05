players=[
    {
        "name":"Virat Kohli",
        "age":"31",
        "style":"Right Hand Bat"
    },
    {
        "name":"Ajinkya Rahane",
        "age":"30",
        "style":"Right Band Bat"
    },
    {
        "name":"Mahendra Singh Dhoni",
        "age":"38",
        "style":"Right Hand Bat"
    },
    {
        "name":"Rohit Sharma",
        "age":"32",
        "style":"Right Hand Bat"
    },
    {
        "name":"Shikhar Dhawan",
        "age":"33",
        "style":"Left Hand Bat"
    }
]

function getName()
{
    var name=document.getElementById("name").value;   
    var playersArr=players;
    var i;
    var res=[];
    var flag=0;
    for(i=0;i<playersArr.length;i++)
    {
        if(playersArr[i].name==name)
        {
            res.push(playersArr[i].name);
            res.push(playersArr[i].age);
            res.push(playersArr[i].style);
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        document.getElementById("out").innerHTML="Invalid Entry";
    }
    else
    {
        document.getElementById("out").innerHTML="Player Name: "+res[0];
        document.getElementById("out1").innerHTML="Age: "+res[1]+" years";
        document.getElementById("out2").innerHTML="Batting Style: "+res[2];
    }
        
}