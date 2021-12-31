import React, {useState,useEffect} from "react"
import Select from 'react-select';
import { resList } from './ressList'
import { useParams } from 'react-router-dom';
import {getRessourceId} from './Components/Service/api';

export default function AnomalieForm() {

  const [values, setValues] = useState({
    resId: 0,
    resName: '',
		resDesc: '',
		resLoca: '',
		resResp: '',
		anomalies: []
  });


  const handleIdInputChange = (event) => {
    setValues({
      resId: event.target.value,
      resName: resList[event.target.value].resName,
      resDesc: resList[event.target.value].resDesc,
      resLoca: resList[event.target.value].resLoca,
      resResp: resList[event.target.value].resResp,
      anomalies: resList[event.target.value].anomalies
    })
  }
  const { id } = useParams();

  const fetchData = async () => {
    console.log(id);
    const response = await getRessourceId(id);
    console.log(response.ressource._id);
   
    setValues({
      resId: response.ressource._id,
      resName: response.ressource.title,
      resDesc:response.ressource.description,
      resLoca:response.ressource.location,
      resResp:response.ressource.Responsable,
      anomalies:JSON.parse(response.ressource.Annomalies), 
    })
  }

  useEffect(async() => {
    fetchData();
  },[]); 


    return (
          <div className="md:grid md:grid-cols-3 md:gap-6 grid place-items-center h-screen">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden ">
                  <div className="px-4 py-10 bg-white space-y-6 sm:p-6">
              
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Nom de la ressource
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          
                          <input
                          value={values.resName}
                          id="ressource-name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                          type="text"
                          placeholder="Nom de la ressource"
                          name="ressourceName"
                        />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={values.resDesc}
                          id="ressource-description"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          type="text"
                          placeholder="Description de la ressource"
                          name="ressourceDesc"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Localisation de la ressource
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          
                        <input
                          value={values.resLoca}
                          id="localisation"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                          type="text"
                          placeholder="Localisation de la ressource"
                          name="localisation"
                        />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Responsable de maintenance
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          
                        <input
                          value={values.resResp}
                          id="responsable"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                          type="text"
                          placeholder="Responsable de maintenance"
                          name="responsable"
                        />
                        </div>
                      </div>
                    </div>

                   {/* */}
                   <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2 pb-20">
                      <Select
                        
                        closeMenuOnSelect={false}
                        placeholder='Selectionnez une anomalie'
                        name="anomalie"
                        className="basic-multi-select"
                        options={values.anomalies}
                      />
                      </div>
                    </div>
                    
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
    )
  }
  