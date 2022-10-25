import React from 'react';

export default function DonationForm() {

    const donate = (donationIndex) => {
        console.log(donationIndex)
        fetch('/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                { id: donationIndex, quantity: 1}
            ]
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({ url }) => {
        console.log(url)
        window.location = url;
    }).catch(e => {
        console.error(e.error)
    })
}
    
    return (
        <div className='w-full justify-center content-center text-xl px-10 py-10 rounded-md'>
            <div className='w-full justify-center content-center text-xl'>
                <div className="mb-20">
                    <p>Donations collected will be given to organizations to further their causes.</p>
                </div>
            </div>
            <div className='justify-center content-center text-lg'>
                <button
                className='px-4 py-3 bg-green-700 mx-3 font-bold'
                onClick={() => donate(1)}
                id="button">
                    $5
                </button>
                <button
                className='px-4 py-3 bg-green-700 mx-3 font-bold'
                onClick={() => donate(2)}
                id="button">
                    $10
                </button>
                <button
                className='px-4 py-3 bg-green-700 mx-3 font-bold'
                onClick={() => donate(3)}
                id="button">
                    $20
                </button>
                <button
                className='px-4 py-3 bg-green-700 mx-3 font-bold'
                onClick={() => donate(4)}
                id="button">
                    $50
                </button>               
                <button
                className='px-4 py-3 bg-green-700 mx-3 font-bold'
                onClick={() => donate(5)}
                id="button">
                    $100
                </button>
            </div>
            
        </div>
    )
}