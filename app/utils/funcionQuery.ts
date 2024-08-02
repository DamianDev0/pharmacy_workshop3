import {pool}  from '../config/db'

interface MedicineResult {
    id: number;
}

export async function foundMedicine(id: number): Promise<MedicineResult | undefined> {
    try {
        const [rows] = await pool.query('SELECT id FROM medicines WHERE id = ?', [id]);

        //
        const [medicine] = rows as MedicineResult[];
    
        if (!medicine) {
            return undefined;
        }
    
        return medicine;
        
    } catch (error) {
        console.error('Error finding medicine:', error);
        throw new Error('Error finding medicine');
        
    }
}

