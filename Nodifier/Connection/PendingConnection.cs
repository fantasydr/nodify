﻿using System;
using System.Windows;

namespace Nodifier
{
    public interface IPendingConnection
    {
        bool IsVisible { get; set; }
        Point TargetLocation { get; set; }
        public object? PreviewTarget { get; set; }

        void Start(IConnector source);
        void Complete(object target);
    }

    public class PendingConnection : PropertyChangedBase, IPendingConnection
    {
        public IGraphEditor Graph { get; }

        private bool _isVisible;
        public bool IsVisible
        {
            get => _isVisible;
            set => SetAndNotify(ref _isVisible, value);
        }

        private Point _targetLocation;
        public Point TargetLocation
        {
            get => _targetLocation;
            set => SetAndNotify(ref _targetLocation, value);
        }

        private object? _previewTarget;
        public object? PreviewTarget
        {
            get => _previewTarget;
            set => SetAndNotify(ref _previewTarget, value);
        }

        private IConnector? _source;

        public PendingConnection(IGraphEditor graph)
        {
            Graph = graph;
        }

        public virtual void Start(IConnector source)
        {
            _source = source ?? throw new ArgumentNullException(nameof(source));
        }

        public virtual void Complete(object target)
        {
            if (_source == null)
            {
                throw new NullReferenceException("Must call Start() before calling Complete()");
            }

            if (target is IConnector connector)
            {
                _source.TryConnectTo(connector);
            }
            else if (target is IGraphElement element)
            {
                _source.TryConnectTo(element);
            }
        }
    }
}