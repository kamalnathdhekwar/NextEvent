"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEventContext } from '../EventContext';

const EnteredEventList = () => {
  const { events, removeEvent } = useEventContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [deadlineFilter, setDeadlineFilter] = useState('');
  const router = useRouter();

  const handleViewMore = (id) => {
    router.push(`/eventdetail/${id}`);
  };

  const handleRemove = (index) => {
    if (confirm("Do you really want to delete this event?")) {
      removeEvent(index);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearchQuery = event.eventName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDeadlineFilter = deadlineFilter ? event.submissionDeadline === deadlineFilter : true;
    return matchesSearchQuery && matchesDeadlineFilter;
  });

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Entered Events</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by event name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="date"
          placeholder="Filter by deadline"
          value={deadlineFilter}
          onChange={(e) => setDeadlineFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>

      <ul>
        {filteredEvents.length === 0 && <p>No events match your criteria.</p>}
        {filteredEvents.map((event, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{index + 1}. {event.eventName}</h3>
            <p>{event.eventDescription}</p>
            <p className="text-gray-600">Deadline: {event.submissionDeadline}</p>
            <button
              onClick={() => handleViewMore(index)}
              className="text-blue-500 underline"
            >
              View More
            </button>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 underline ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnteredEventList;
