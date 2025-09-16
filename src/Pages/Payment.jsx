import React, { useState } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';


// Footer (simple version, can be replaced with motion if needed)
function Footer() {
    return (
        <footer className="bg-white text-[#292F36] pt-16 pb-8 px-4 sm:px-8 lg:px-[8%] border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-12">
                {/* Brand */}
                <div className="space-y-5 max-w-sm">
                    <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
                        <span className="text-[#CDA274] text-3xl">▲</span>
                        <span className="font-serif">Interno</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                        It is a long established fact that a reader will be distracted lookings.
                    </p>
                    <div className="flex items-center gap-5 text-gray-500 text-sm">
                        {['f', 't', 'in', 'ig'].map(icon => (
                            <span key={icon} className="cursor-pointer uppercase tracking-wide hover:text-[#CDA274]">{icon}</span>
                        ))}
                    </div>
                </div>
                {/* Pages */}
                <div className="space-y-5">
                    <h4 className="font-serif font-semibold text-lg">Pages</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#CDA274] transition">About Us</li>
                        <li className="hover:text-[#CDA274] transition">Our Projects</li>
                        <li className="hover:text-[#CDA274] transition">Our Products</li>
                        <li className="hover:text-[#CDA274] transition">Our Team</li>
                        <li className="hover:text-[#CDA274] transition">Contact Us</li>
                        <li className="hover:text-[#CDA274] transition">Services</li>
                    </ul>
                </div>
                {/* Services */}
                <div className="space-y-5">
                    <h4 className="font-serif font-semibold text-lg">Services</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="hover:text-[#CDA274] transition">Kitchen</li>
                        <li className="hover:text-[#CDA274] transition">Living Area</li>
                        <li className="hover:text-[#CDA274] transition">Bathroom</li>
                        <li className="hover:text-[#CDA274] transition">Dinning Hall</li>
                        <li className="hover:text-[#CDA274] transition">Bedroom</li>
                    </ul>
                </div>
                {/* Contact */}
                <div className="space-y-5">
                    <h4 className="font-serif font-semibold text-lg">Contact</h4>
                    <div className="space-y-4 text-sm text-gray-600">
                        <p>55 East Birchwood Ave.<br />Brooklyn, New York 11201</p>
                        <p>contact@interno.com</p>
                        <p>(123) 456 - 7890</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-gray-200 pt-6 text-center text-[11px] sm:text-xs text-gray-500 tracking-wide">
                Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
            </div>
        </footer>
    );
}

function Payment() {
    const [form, setForm] = useState({
        name: '',
        card: '',
        month: '',
        year: '',
        cvc: '',
    });

    // Demo values for preview
    const demo = {
        name: 'John Smith',
        card: '4256 7890 5678 4532',
        month: '09',
        year: '2020',
        cvc: '145',
        amount: '12 300',
        currency: '$',
    };

    // Use demo values for initial preview
    React.useEffect(() => {
        setForm({
            name: demo.name,
            card: demo.card,
            month: demo.month,
            year: demo.year,
            cvc: demo.cvc,
        });
    }, []);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-[#f6f3ee] flex flex-col font-sans">
            {/* <Header /> */}
            <main className="flex-1 flex flex-col items-center justify-center py-12 px-2 sm:px-6 lg:px-0">
                <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 p-4 sm:p-8 lg:p-16 bg-white rounded-2xl shadow-xl border border-[#e5e1de]">
                    {/* Card Preview */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative w-80 h-48 flex items-center justify-center">
                            <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#CDA274] to-[#e2dbd7] shadow-lg" />
                            <div className="relative z-10 w-full h-full flex flex-col justify-between p-6">
                                <div className="flex justify-between items-center">
                                    <span className="block w-10 h-7 bg-yellow-300 rounded-sm" />
                                    <span className="text-white text-lg font-bold tracking-widest">VISA</span>
                                </div>
                                <div className="mt-4 text-white text-xl font-mono tracking-widest font-semibold">
                                    {form.card || '•••• •••• •••• ••••'}
                                </div>
                                <div className="flex justify-between items-end mt-6 text-white text-sm">
                                    <div>
                                        <div className="uppercase text-xs tracking-wide">Card Holder</div>
                                        <div className="font-semibold">{form.name || 'Name'}</div>
                                    </div>
                                    <div>
                                        <div className="uppercase text-xs tracking-wide">Expires</div>
                                        <div className="font-semibold">{form.month || 'MM'}/{form.year || 'YY'}</div>
                                    </div>
                                    <div>
                                        <div className="uppercase text-xs tracking-wide">CVC</div>
                                        <div className="font-semibold">{form.cvc || '•••'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Payment Form */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-2xl font-serif font-semibold mb-8 text-[#292F36]">Payment details</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[#CDA274] mb-1">Cardholder Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border-b border-[#CDA274] bg-transparent py-2 px-1 text-[#292F36] font-serif text-lg focus:outline-none focus:border-[#CDA274] placeholder:text-gray-400"
                                    placeholder="John Smith"
                                    autoComplete="cc-name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#CDA274] mb-1">Card Number</label>
                                <input
                                    type="text"
                                    name="card"
                                    value={form.card}
                                    onChange={handleChange}
                                    className="w-full border-b border-[#CDA274] bg-transparent py-2 px-1 text-[#292F36] font-mono text-lg tracking-widest focus:outline-none focus:border-[#CDA274] placeholder:text-gray-400"
                                    placeholder="4256 7890 5678 4532"
                                    autoComplete="cc-number"
                                    maxLength={19}
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-[#CDA274] mb-1">Expiry Month</label>
                                    <input
                                        type="text"
                                        name="month"
                                        value={form.month}
                                        onChange={handleChange}
                                        className="w-full border-b border-[#CDA274] bg-transparent py-2 px-1 text-[#292F36] font-mono text-lg focus:outline-none focus:border-[#CDA274] placeholder:text-gray-400"
                                        placeholder="09"
                                        autoComplete="cc-exp-month"
                                        maxLength={2}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-[#CDA274] mb-1">Expiry Year</label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={form.year}
                                        onChange={handleChange}
                                        className="w-full border-b border-[#CDA274] bg-transparent py-2 px-1 text-[#292F36] font-mono text-lg focus:outline-none focus:border-[#CDA274] placeholder:text-gray-400"
                                        placeholder="2020"
                                        autoComplete="cc-exp-year"
                                        maxLength={4}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-[#CDA274] mb-1">CVC</label>
                                    <input
                                        type="text"
                                        name="cvc"
                                        value={form.cvc}
                                        onChange={handleChange}
                                        className="w-full border-b border-[#CDA274] bg-transparent py-2 px-1 text-[#292F36] font-mono text-lg focus:outline-none focus:border-[#CDA274] placeholder:text-gray-400"
                                        placeholder="145"
                                        autoComplete="cc-csc"
                                        maxLength={4}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-lg font-serif text-[#292F36]">Payment amount:</span>
                                <span className="text-2xl font-bold text-[#CDA274]">{demo.amount} {demo.currency}</span>
                            </div>
                            <Link
                                to="/check"
                                className="w-full mt-6 py-3 rounded-full bg-[#CDA274] text-white font-semibold text-lg tracking-wide hover:bg-[#b68b5e] transition font-serif shadow-md text-center block"
                                style={{ textDecoration: 'none' }}
                            >
                                PAY
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Payment;
