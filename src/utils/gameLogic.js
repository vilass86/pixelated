// Card-specific messages for each value
export const cardMessages = {
  2: {
    high: {
      win: "Starting from the bottom like an early Bitcoin! To the moon we go!",
      lose: "Oops! Guess you didn’t HODL that low position!",
    },
    low: {
      win: "Strong hands! Got that low, low buy!",
      lose: "2 didn’t pump low enough! Keep stacking!",
    },
  },
  3: {
    high: {
      win: "Another step up the crypto ladder! Let’s moon this one!",
      lose: "The market dipped! Time to reassess your strategy.",
    },
    low: {
      win: "Diamond hands! 3 came through with a low multiplier!",
      lose: "Trying to short on a 3? Bold move. Try again!",
    },
  },
  4: {
    high: {
      win: "Bullish on 4! Great prediction, next stop is the ATH!",
      lose: "Bearish downturn on 4! Better luck next time.",
    },
    low: {
      win: "Nice short! Sometimes low is the way to go!",
      lose: "4 just didn’t dip enough! Hang in there!",
    },
  },
  5: {
    high: {
      win: "You’re in a bull run! That 5 is a great step up!",
      lose: "Ouch, missed the support level! Don’t worry, crypto bounces back!",
    },
    low: {
      win: "Keeping it low-key like a stealth launch!",
      lose: "Tried to short a 5? Market had other plans!",
    },
  },
  6: {
    high: {
      win: "To the next resistance level! 6 came through with gains!",
      lose: "Bear market on that call! Better luck on the next trade.",
    },
    low: {
      win: "Strong support line on the 6! Smart move!",
      lose: "Low on a 6? Risky play, but crypto is full of surprises!",
    },
  },
  7: {
    high: {
      win: "Lucky 7! You’re in a bull run, my friend!",
      lose: "Didn’t hit the moon this time. Charting a new course!",
    },
    low: {
      win: "Going short on 7—solid move in this market!",
      lose: "A low 7 didn’t hold… sometimes the market just pumps!",
    },
  },
  8: {
    high: {
      win: "Market momentum! Riding the 8 wave up!",
      lose: "Rough rejection at 8! Time for a new strategy.",
    },
    low: {
      win: "Keeping it bearish paid off this time!",
      lose: "The 8 didn’t dip low! That was a tough sell!",
    },
  },
  9: {
    high: {
      win: "9 took you closer to ATH! Let’s keep that bull run going!",
      lose: "No moon on the 9… Time to HODL.",
    },
    low: {
      win: "Got that low bet! Sometimes bear markets are rewarding!",
      lose: "9 hit a pump! Market volatility at its finest!",
    },
  },
  10: {
    high: {
      win: "Double digits to the moon! That 10 is a power move!",
      lose: "10 didn’t break resistance! Stay strong for the next wave.",
    },
    low: {
      win: "Shorting a 10? Risky, but well played!",
      lose: "The 10 held strong! The market moves on.",
    },
  },
  11: {
    high: {
      win: "BNB boosts you up! That’s a Binance-level win!",
      lose: "BNB went bear… Better luck on the next pump!",
    },
    low: {
      win: "Low on BNB? Nailed it with that smart move!",
      lose: "BNB doesn’t dip easy! Guess it’s bullish this time!",
    },
  },
  12: {
    high: {
      win: "The Solana Queen delivers! Sunshine and gains!",
      lose: "Market shadows hit Solana hard! Maybe next time.",
    },
    low: {
      win: "Going low on Solana? Solid play!",
      lose: "Solana’s soaring, no time to go low! Moon incoming!",
    },
  },
  13: {
    high: {
      win: "The ETH King approves! You’re stacking gains!",
      lose: "ETH couldn’t hold up this time. Time to reevaluate.",
    },
    low: {
      win: "Shorting the King of crypto? Brave, but you nailed it!",
      lose: "ETH doesn’t go low! Keep aiming for those highs!",
    },
  },
  1: {
    win: "It’s Bitcoin, the crypto king! Jackpot vibes all around!",
  },
};

// Card multipliers for each value
export const cardMultipliers = {
  2: { high: 1.2, low: 4 },
  3: { high: 1.25, low: 3.5 },
  4: { high: 1.3, low: 3 },
  5: { high: 1.35, low: 2.5 },
  6: { high: 1.4, low: 2 },
  7: { high: 1.5, low: 1.7 },
  8: { high: 1.6, low: 1.6 },
  9: { high: 1.8, low: 1.6 },
  10: { high: 2, low: 1.5 },
  11: { high: 2.5, low: 1.4 }, // Jack
  12: { high: 3, low: 1.3 },  // Queen
  13: { high: 4, low: 1.2 },  // King
  1: { high: 1.2, low: 1.2 }, // Ace
};

// Function to calculate the multiplier
export const calculateMultiplier = (currentCard, prediction) => {
  const cardValue = parseInt(currentCard.value, 10); // Ensure card value is an integer
  const multipliers = cardMultipliers[cardValue];
  if (!multipliers) {
    throw new Error(`Invalid card value: ${cardValue}`);
  }
  return prediction === "high" ? multipliers.high : multipliers.low;
};

// Function to get the dynamic card message
export const getCardMessage = (cardValue, prediction, isWin) => {
  const messages = cardMessages[cardValue];
  if (!messages) {
    return "An unexpected error occurred. Invalid card value.";
  }
  if (cardValue === 1) return messages.win; // Special handling for Ace
  return isWin ? messages[prediction]?.win : messages[prediction]?.lose;
};
