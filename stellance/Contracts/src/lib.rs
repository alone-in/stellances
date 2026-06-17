#![no_std]

use soroban_sdk::{contractimpl, symbol, Env, Symbol};

pub struct StellanceContract;

#[contractimpl]
impl StellanceContract {
    pub fn ping(env: Env) {
        env.events().publish((symbol!("ping"),), ());
    }

    pub fn get_greeting(env: Env) -> Symbol {
        symbol!("Hello from Stellance!")
    }
}
