import { useEffect, useState } from 'react';
import Navigator from '@/components/navigator';
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Image from 'next/image'
import { useRouter } from 'next/router';

function ProfileDynamicPage() {
    const [info, setInfo] = useState<any[]>([]);
    const routing = useRouter();
    const { group: groupid } = routing.query; 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const x = localStorage.getItem('username')
          console.log(x)
          const form = {uuid: x}
          const response = await axios.post("http://localhost:8800/user_content", form);
          setInfo(response.data[0]);
          console.log(response.data);
          console.log(info) // Return the data on success
        } catch (error) {
          throw error; // Throw an error on failure
        }
      };
    
      toast.promise(fetchData(), {
        loading: "Fetching data...",
        error: "Error fetching groups",
        success: "Data fetched successfully!",
      });
    }, []);

    return (
        <>
        <Navigator>
            <div className="container controller flex flex-row w-[100%] justify-center">
                <div className="container-insider-generic flex flex-col items-center justify-between">
                    <div className="container-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat officia expedita placeat iste explicabo sequi autem consectetur cumque quasi, illum facere vitae, ratione est. Numquam dolor dolores eos laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem et ratione perferendis, dolores itaque delectus, sint sit sequi consectetur quisquam quae deserunt officiis minima voluptatum at reiciendis. Dolorem, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic quisquam debitis praesentium fugit omnis aspernatur, a harum vitae accusamus. Temporibus deleniti numquam non quo, molestias provident iure iusto modi.
                        </div>
                        <div className="container-null-space">
                    </div>
                    <p>{info.nome}</p>
                    </div>
                <div className="container-insider-generic w-[80%] flex justify-center items-center">
                <img src={`http://localhost:8800/uploads/${info.foto}`} style={{borderRadius: "100%", width:"300% !important", height: "auto", maxWidth: "400% !important"}}/>

                </div>
                <div className="container-insider-generic flex flex-col items-center justify-center h-[100%]">
                    <div className="container-text h-[50%]">
                        </div>
                        <div className="container-null-space">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sint eos provident, fugit ullam harum obcaecati assumenda repellendus laboriosam quia nobis placeat, laudantium quaerat similique accusamus omnis, veniam odit quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum et cum aspernatur quo voluptate sit minus perferendis perspiciatis dolore quidem recusandae possimus, illo molestiae minima voluptas. Delectus ratione praesentium eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quibusdam itaque, suscipit hic quos, sint alias ab, cupiditate iste molestias laudantium ipsa nesciunt ratione ea soluta atque est reiciendis! Laudantium.
                    </div>
                    </div>
            </div>
        </Navigator>
        </>
    )
}

export default ProfileDynamicPage;
