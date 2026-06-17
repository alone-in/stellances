#![cfg(test)]

use soroban_sdk::{Env, symbol};
use stellance_contract::StellanceContract;

#[test]
fn test_ping() {
    let env = Env::default();
    StellanceContract::ping(env.clone());
    let events = env.events().all();
    assert_eq!(events.len(), 1);
}

#[test]
fn test_greeting() {
    let env = Env::default();
    let greeting = StellanceContract::get_greeting(env);
    assert_eq!(greeting, symbol!("Hello from Stellance!"));
}
