import Select from 'react-select';
import Mobile from './Mobile';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../features/user/userSlice';
import { Slide, toast } from 'react-toastify';

function Styles() {
    const dispatch = useDispatch() ;
    const submit = useSelector((state) => state.user.submit) ; 
    const usernameId = useSelector((state) => state.user.username?._id);
    
    const handleFontChange = async (selected) => {
        try {
            const res = await fetch(`/api/v1/username/update/${usernameId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ font: selected.value })
            })

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    transition: Slide,
                    style: {
                        width: "auto",
                        whiteSpace: "nowrap",
                        padding: "12px 20px",
                        fontFamily: "Poppins",
                    },
                });
                return ; 
            }
            dispatch(updateUsername(data)) ; 
            toast.success("Saved!", {
                position: "top-center",
                autoClose: 1000,
                transition: Slide,
                style: {
                  width: "auto",
                  whiteSpace: "nowrap",
                  padding: "12px 20px",
                  fontFamily: "Poppins",
                },
              });
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleThemeChange = async(selected) => {
        try {
            const res = await fetch(`/api/v1/username/update/${usernameId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ theme: selected.value })
            })

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    transition: Slide,
                    style: {
                        width: "auto",
                        whiteSpace: "nowrap",
                        padding: "12px 20px",
                        fontFamily: "Poppins",
                    },
                });
                return ; 
            }
            dispatch(updateUsername(data)) ; 
            toast.success("Saved!", {
                position: "top-center",
                autoClose: 1000,
                transition: Slide,
                style: {
                  width: "auto",
                  whiteSpace: "nowrap",
                  padding: "12px 20px",
                  fontFamily: "Poppins",
                },
              });
        }
        catch (error) {
            console.log(error)
        }
    }

    const fontOptions = [...Array(13)].map((_, i) => ({
        value: `font-${i}`,
        label: (
            <div className="w-auto h-auto rounded-lg p-4 bg-indie-800 text-indie-100 group ">
                <div key={i} data-font={`font-${i}`} className="w-full h-full flex flex-row rounded-lg overflow-clip cursor-pointer">
                    <div className="font-[family-name:var(--primary-font)] text-4xl">A</div>
                    <div className="font-[family-name:var(--primary-font)] text-4xl">a</div>
                </div>
            </div>
        )
    }));
    const themeOptions = [...Array(13)].map((_, i) => ({
        value: `theme-${i}`,
        label: (
            <div className="w-30 h-20 rounded-lg p-4 bg-indie-700 hover:bg-indie-500">
                <div key={i} data-theme={`theme-${i}`} className="w-full h-full flex flex-row rounded-lg overflow-clip cursor-pointer">
                    <div className="bg-[var(--primary-bg-color)] w-1/4"></div>
                    <div className="bg-[var(--secondary-bg-color)] w-1/4"></div>
                    <div className="bg-[var(--primary-button-color)] w-1/4"></div>
                    <div className="bg-[var(--primary-text-color)] w-1/4"></div>
                </div>
            </div>
        )
    }));

    const customStyles = {
        menu: (base) => ({
            ...base,
            width: 'auto',
            backgroundColor: 'var(--indie-600)',
        }),
        control: (base) => ({
            ...base,
            backgroundColor: 'var(--indie-600)',
            border: '2px solid var(--indie-800)',
            borderRadius: '0.5rem',
            padding: '',
            cursor: 'pointer',
        }),
        singleValue: (base) => ({
            ...base,
            position: 'relative',
            transform: 'none',
            top: 0,
            margin: 0,
        }),
        container: (base) => ({
            ...base,
            width: 'auto',
            focus: 'none',
        }),
        valueContainer: (base) => ({
            ...base,
            padding: 0,
            height: 'auto',
        }),
        dropdownIndicator: () => ({
            display: 'none',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        menuList: (base) => ({
            ...base,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '',
            backgroundColor: 'var(--indie-600)',
        }),
        option: (base, state) => ({
            ...base,
            height: 'auto',
            padding: '0.5rem',
            backgroundColor: 'var(--indie-700)',
            border: state.isFocused ? '2px solid var(--primary-button-color)' : 'none',
            borderRadius: '0.5rem',
            color: 'black'
        }),
    };
    return (
        <div className='flex justify-between xl:px-40 px-10 flex-row gap-2 w-full mx-auto lg:overflow-y-scroll overflow-hidden lg:min-h-fit min-h-screen
        text-[10px] md:text-[16px] md:py-0 py-6'>
            <div className='flex flex-col items-start gap-8'>
                <div className='flex flex-col items-start gap-2'>
                    <div className='px-1'>FONT</div>
                    <Select
                        options={fontOptions}
                        defaultValue={fontOptions[0]}
                        formatOptionLabel={({ label }) => label}
                        styles={customStyles}
                        className="w-20 h-20"
                        classNamePrefix="font-select"
                        menuPosition="fixed"
                        onChange={handleFontChange}
                    />
                </div>

                <div className='flex flex-col items-start gap-2'>
                    <div className='px-1'>THEME</div>
                    <Select
                        options={themeOptions}
                        defaultValue={themeOptions[0]}
                        formatOptionLabel={({ label }) => label}
                        styles={customStyles}
                        className="w-60"
                        classNamePrefix="theme-select"
                        menuPosition="fixed"
                        onChange={handleThemeChange}
                    />
                </div>
            </div>
            {submit && <Mobile/>}

        </div>
    )
}
export default Styles;