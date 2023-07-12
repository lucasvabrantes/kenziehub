import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [techList, setTechList] = useState([]);
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [object, setObject] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const showTechList = () => {
            setTechList(user.techs);
        };

        showTechList();
    }, [user]);

    const addTech = async (formData) => {
        const token = localStorage.getItem("@USERTOKEN");
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Tecnologia adicionada com sucesso!");
            setTechList([...techList, data]);
            setIsRegModalOpen(false);
        } catch (error) {
            toast.error("Erro!");
        }
    };

    const editTech = async (formData) => {
        const token = localStorage.getItem("@USERTOKEN");
        const techId = object.id;
        try {
            const { data } = await api.put(`users/techs/${techId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newTechList = techList.map((tech) => {
                if (tech.id === techId) {
                    return data;
                } else {
                    return tech;
                }
            });
            toast.success("Tecnologia editada com sucesso");
            setTechList(newTechList);
            setIsEditModalOpen(false);
        } catch (error) {
            toast.error("Erro!");
        }
    };

    const deleteTech = async (techId) => {
        const token = localStorage.getItem("@USERTOKEN");
        try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newTechList = techList.filter(({ id }) => id !== techId);
            setTechList(newTechList);
            toast.success("Tecnologia deletada com sucesso!");
            setIsEditModalOpen(false);
            setObject(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TechContext.Provider
            value={{
                addTech,
                editTech,
                deleteTech,
                techList,
                setTechList,
                isRegModalOpen,
                isEditModalOpen,
                setIsRegModalOpen,
                setIsEditModalOpen,
                object,
                setObject,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};
