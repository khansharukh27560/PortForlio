import React, { useEffect, useState } from 'react';

export default function ExpensesTracker() {
    const [input, setInput] = useState('');
    const [income, setIncome] = useState([]);
    const [expennce, setExpennce] = useState('');
    const [category, setCategory] = useState('');
    const [history, setHistory] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [totalcutPayment, setTotalCutPayment] = useState(0);
    const [loaded, setLoaded] = useState(false); // ✅ new flag

    // Load localStorage values on first render
    useEffect(() => {
        const savedIncome = JSON.parse(localStorage.getItem('income')) || [];
        const savedHistory = JSON.parse(localStorage.getItem('history')) || [];

        setIncome(savedIncome);
        setHistory(savedHistory);
        setLoaded(true); // ✅ only calculate total after load
    }, []);

    // Save values to localStorage whenever income or history changes
    useEffect(() => {
        if (!loaded) return; // ⛔ Don't run if data hasn't been loaded yet

        localStorage.setItem('income', JSON.stringify(income));
        localStorage.setItem('history', JSON.stringify(history));

        const totalIncome = income.reduce((a, b) => a + Number(b.amount), 0);
        const totalExpenses = history.reduce((a, b) => a + Number(b.amount), 0);
        setTotalCutPayment(totalIncome - totalExpenses);
    }, [income, history, loaded]);

    const handleClictoEncome = () => {
        if (!input.trim()) return;
        const newIncome = {
            id: Date.now(),
            amount: Number(input),
        };
        setIncome(prev => [...prev, newIncome]);
        setInput('');
    };

    const handleSubmitHistory = () => {
        if (!expennce.trim() || !category.trim()) return;
        const newExpense = {
            id: Date.now(),
            amount: Number(expennce),
            category: category,
            date: new Date().toISOString(),
        };
        setHistory(prev => [...prev, newExpense]);
        setExpennce('');
        setCategory('');
    };

    const filteredExpenses = history.filter(item =>
        item.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.amount.toString().includes(searchInput)
    );

    return (
        <div className='mainTodo'>
            <h1 className='heading'>Expenses Tracker</h1>
            <h3>Balance: ₹{totalcutPayment}</h3>

            <div>
                <input
                    type='number'
                    placeholder='Enter your income'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button className='todoButton btn btn-success' onClick={handleClictoEncome}>Add Income</button>
            </div>

            <div>
                <h2>Expense History</h2>

                <input
                    placeholder='Search by category or amount'
                    type='text'
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                />

                <input
                    type='number'
                    placeholder='Enter expense amount'
                    onChange={(e) => setExpennce(e.target.value)}
                    value={expennce}
                />

                <input
                    list='category'
                    placeholder='Select category'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <datalist id='category'>
                    <option value='food' />
                    <option value='vegetable' />
                    <option value='clothes' />
                    <option value='rent' />
                    <option value='salary' />
                    <option value='other' />
                </datalist>

                <button className='todoButton btn btn-success' onClick={handleSubmitHistory}>Add Expense</button>

                <ul>
                    {filteredExpenses.map(item => (
                        <li key={item.id}>
                            {new Date(item.date).toLocaleDateString()} {new Date(item.date).toLocaleTimeString()}:
                            {` ${item.category} - ₹${item.amount}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
