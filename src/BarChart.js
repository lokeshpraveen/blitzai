import {useEffect,useState} from 'react'
import {Bar,Line} from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,PointElement,registerables } from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,PointElement,...registerables)

const options = {
    indexAxis:'x',
    elements:{
        bar:{
            borderWidth:1,
        }
    },
    responsive:true,
    plugins:{
        legend:{
            position:'top'
        },
        title:{
            display:true,
            text:'Chart JS Horizontal chart'

        }
    }
}
const BarChart = (propsVAl) =>{
    useEffect(()=>{

    },[ window.innerWidth])
    const [labels,setLabels] =useState( ['sun','mon','tue','wed','thurs','fri','sat','con'])
    const[data,setData]= useState( {
        labels,
        datasets:[
            {
                label:'Dataset 1',
                data:[],
                borderColor:'red',
                backgroundColor:'orange'
            },
            {
                label:'Dataset 2',
                data:[],
                borderColor:'black',
                backgroundColor:'grey'
            },

        ]
    })
    const [d1Set,setD1Set]=useState()
    const [d2Set,setD2Set]=useState()

    useEffect(()=>{
        const fetchData=()=>{
            const url = 'https://blob-internal.goblitz.ai/quickdump/sales-data';
            const dataset1=[];
            const dataset2=[];
            fetch(url,{
                method:'GET'
            }).then(data => {
                console.log("api data",data)
                const res = data.json()
                return res
            }).then((res)=>{


                for(const val of res){

                    const d1 = dataset1.push(val.SALES)
                    const d2 =  dataset2.push(val.ORDERNUMBER)
                    setD1Set(d1)
                    setD2Set(d2)
                    setLabels(dataset2)
                    setData(
                        {
                            labels,
                            datasets:[
                                {
                                    label:'SALES',
                                    data:dataset1,
                                    borderColor:'red',
                                    backgroundColor:'orange'
                                },
                                {
                                    label:'OrderNumber',
                                    data:dataset2,
                                    borderColor:'black',
                                    backgroundColor:'grey'
                                },

                            ]
                        }
                    )
                }

                console.log(dataset1,dataset2,"arr")
            }).catch(e=>{
                console.log("api error",e)
            })
        }
        fetchData()
    })
    const [iVal,setIVal] = useState(2822)
    function update(e){
        setIVal(e.target.value)
    }
    function dataUpdate(){
        setLabels([1,2,3,4,5,6,7,8,9])
    }
    return (<>
        {console.log(propsVAl,"!!!")}
        { propsVAl.data == 10 && <div style={{width:'50%',height:'50%'}}><Bar data={data} options={options}/></div>}
        {propsVAl.data == 21 && <div style={{width:'50%',height:'50%'}}><Line data={data} options={options}/></div>}

    </>)
};
export default BarChart
