import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../apiClient'
import { useNavigate } from "react-router-dom";
import { RoutineData } from "../../../Server/shared/types";

const NewRoutine = () => {

    const {register, handleSubmit, formState : {errors}} = useForm<RoutineData>()
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation(apiClient.createNewRoutine, {
        onSuccess : async () => {
            await queryClient.invalidateQueries("fetchRoutines")
            navigate('/routine')
        },
        onError : () => {
            alert("Error creating routine")
        }
    })
    const products = [
        'Cleanser',
        'Exfoliant',
        'Toner',
        'Serum',
        'Eye Cream',
        'Neck Cream',
        'Spot Treatment',
        'Moisturizer',
        'Lip Balm',
        'SPF - Daytime only', 
        'Retinol - Night only' 
      ];

    const onSubmit = handleSubmit((form_data : RoutineData)  => {
        mutation.mutate(form_data)
    })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Select Products</h2>

            {products.map((product, index) => (
                <div key={index}>
                <label>
                    <input type="checkbox" value={product} {...register("productType", {
                        validate : (productList) => {
                            if(productList && productList.length != 0){
                                return true
                            }
                            return "Choose at least one product for your routine!";
                        }
                    })}/>
                    {product}
                </label>
                </div>
            ))}

            {
                errors.productType && (
                    <span className="text-red-600">{errors.productType.message}</span>
                )
            }

        <h2>Choose Routine</h2>
        <div>
            <label>
                Time of use
                <select {...register("timeOfUse", {required : "Choose when you will be performing this routine"})}>
                    <option value ="" disabled>Select</option>
                    <option value="Day">Day</option>
                    <option value="Night">Night</option>
                </select>
            </label>
            {
                errors.timeOfUse && (
                    <span className="text-red-600">{errors.timeOfUse.message}</span>
                )
            }
        </div>

      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewRoutine
