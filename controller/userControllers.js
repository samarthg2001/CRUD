import {User} from '../model/user_model.js'

export const create = async (req, res) => {
    try {
        // Destructure fields from req.body
        const { email, name, learning, sub, address } = req.body;

        // Check if all required fields are provided (basic validation)
        if (!email || !name || !learning) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create and save the new user
        const userData = new User({ email, name, learning, sub, address });
        const savedUser = await userData.save();
        
        // Respond with the saved user data
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const fetchAlldata=async (req,res)=>{
    try {
        const userData=await User.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error:'Internal server error '})
        console.log(error);
    }
}

export const fetchbyID=async (req,res)=>{
    try {
        const userData=await User.findById(req.params.id);
        if(!userData){
            return res.status(400).json({message: 'user  not exist'})
        }
        
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error:'Internal server error '})
    }
}


export const upDate = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.log(error);
    }
 };

export const deletebyID = async (req,res)=>{
    try {
        const userData=await User.findById(req.params.id);
        if(!userData){
            return res.status(400).json({message: 'user  not exist'})
        }
        const updated=await User.findByIdAndUpdate(req.params.id)    
        res.status(201).json({message: 'user is deleted'});
    } catch (error) {
        res.status(500).json({error:'Internal server error '})
        console.log(error);
    }
}