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
        <div>
            <div className='w-full justify-center content-center text-xl'>
                <div>
                    <p>Donate to support the continued development of this platform.</p>
                </div>
            </div>
            <div className='justify-center content-center text-lg'>
                <button
                className='px-4 py-3 bg-color-indigo'
                onClick={() => donate(1)}
                id="button">
                    $5
                </button>
                <button
                className='px-4 py-3 bg-color'
                onClick={() => donate(2)}
                id="button">
                    $10
                </button>
                <button
                className='px-4 py-3 bg-color'
                onClick={() => donate(3)}
                id="button">
                    $20
                </button>
                <button
                className='px-4 py-3 bg-color'
                onClick={() => donate(4)}
                id="button">
                    $50
                </button>               
                <button
                className='px-4 py-3 bg-color'
                onClick={() => donate(5)}
                id="button">
                    $100
                </button>
            </div>
            
        </div>
    )
}